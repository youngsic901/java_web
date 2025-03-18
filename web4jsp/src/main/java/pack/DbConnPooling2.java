package pack;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

public class DbConnPooling2 {
    private DataSource ds;

    public DbConnPooling2() {
        try{
            Context context = new InitialContext();
            ds = (DataSource)context.lookup("java:comp/env/jdbc_maria");
        } catch (Exception e) {
            System.out.println("constructor err : " + e);
        }
    }

    public ArrayList<GuestbookDto> getDataAll(){
        ArrayList<GuestbookDto> list = new ArrayList<>();
        String sql = "select * from guestbook";

        try(
            Connection conn = ds.getConnection();
            PreparedStatement pstmt = conn.prepareStatement(sql);
            ResultSet rs = pstmt.executeQuery();
        ){
            while(rs.next()){
                GuestbookDto dto = new GuestbookDto();
                dto.setCode(rs.getString("code"));
                dto.setWriter(rs.getString("writer"));
                dto.setTitle(rs.getString("title"));
                dto.setContents(rs.getString("contents"));
                list.add(dto);
            }
        } catch (Exception e) {
            System.out.println("getDataAll err : " + e);
        }

        return list;
    }

    public boolean insertData(GuestbookDto dto){
        boolean b = false;
        String sql = "select max(code) as max from guestbook";

        try(
            Connection conn = ds.getConnection();
        ){
            PreparedStatement pstmt = conn.prepareStatement(sql);
            ResultSet rs = pstmt.executeQuery();
            int maxCode = 0;
                if(rs.next()){
                    maxCode = rs.getInt("max");
                }
                maxCode = maxCode + 1;

                sql = "insert into guestbook values(?,?,?,?)";
                pstmt = conn.prepareStatement(sql);
                pstmt.setInt(1, maxCode);
                pstmt.setString(2, dto.getWriter());
                pstmt.setString(3, dto.getTitle());
                pstmt.setString(4, dto.getContents());
                int result = pstmt.executeUpdate();
                if(result == 1) b = true;
        } catch (Exception e) {
            System.out.println("insertData err : " + e);
        }

        return b;
    }

    public GuestbookDto updateDataRead(String code){
        GuestbookDto dto = null;
        String sql = "select * from guestbook where code = ?";

        try(
            Connection conn = ds.getConnection();
            PreparedStatement pstmt = conn.prepareStatement(sql);
        ){
            pstmt.setString(1, code);
            ResultSet rs = pstmt.executeQuery();
            if(rs.next()){
                dto = new GuestbookDto();
                dto.setCode(rs.getString("code"));
                dto.setWriter(rs.getString("writer"));
                dto.setTitle(rs.getString("title"));
                dto.setContents(rs.getString("contents"));
            }
        } catch (Exception e) {
            System.out.println("updateDataRead err : " + e);
        }
        return dto;
    }

    public boolean updateData(GuestbookDto dto){
        boolean b = false;
        String sql = "update guestbook set writer = ? , title = ? , contents = ? where code = ?";

        try(
                Connection conn = ds.getConnection();
                PreparedStatement pstmt = conn.prepareStatement(sql);
        ){
            pstmt.setString(1, dto.getWriter());
            pstmt.setString(2, dto.getTitle());
            pstmt.setString(3, dto.getContents());
            pstmt.setString(4, dto.getCode());
            if(pstmt.executeUpdate() > 0) b = true;
        } catch (Exception e) {
            System.out.println("updateData err : " + e);
        }

        return b;
    }

    public boolean deleteData(String code){
        boolean b = false;
        String sql = "delete from guestbook where code = ?";

        try(
            Connection conn = ds.getConnection();
            PreparedStatement pstmt = conn.prepareStatement(sql);
        ){
            pstmt.setString(1, code);
            if(pstmt.executeUpdate() > 0) b = true;
        }catch (Exception e){
            System.out.println("deleteData err : " + e);
        }

        return b;
    }
}