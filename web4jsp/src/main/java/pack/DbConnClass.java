package pack;

import java.io.FileInputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.Properties;

public class DbConnClass { // DB 처리용 Businell Logic
    private Connection conn;
    private PreparedStatement pstmt;
    private ResultSet rs;
    private Properties properties = new Properties();

    public DbConnClass() {
        try{
            properties.load(new FileInputStream("c:/work/intellij_web/java_web/web4jsp/src/main/resources/Dbinfo.properties"));
            Class.forName(properties.getProperty("driver"));
        } catch (Exception e) {
            System.out.println("DbConnClass err : " + e);
        }
    }

    public ArrayList<SangpumDto> getDataAll(){
        ArrayList<SangpumDto> list = new ArrayList<>();
        try {
            conn = DriverManager.getConnection(properties.getProperty("url"), properties.getProperty("user"), properties.getProperty("password"));
            String sql = "select * from sangdata";
            pstmt = conn.prepareStatement(sql);
            rs = pstmt.executeQuery();

            while (rs.next()) {
                SangpumDto dto = new SangpumDto();
                dto.setCode(rs.getString("code"));
                dto.setSang(rs.getString("sang"));
                dto.setSu(rs.getString("su"));
                dto.setDan(rs.getString("dan"));
                list.add(dto);
            }
        } catch (Exception e) {
            System.out.println("getDataAll err : " + e);
        } finally {
            try {
                if(rs != null) rs.close();
                if(pstmt != null) pstmt.close();
                if(conn != null) conn.close();
            } catch (Exception e2) {
                System.out.println("closing connection err : " + e2);
            }
        }
        return list;
    }
}
