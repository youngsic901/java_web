package pack;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

public class Jspex14DbConnect {
    private Connection conn;
    private PreparedStatement pstmt;
    private ResultSet rs;

    public Jspex14DbConnect() {
        try{
            Class.forName("org.mariadb.jdbc.Driver");
        } catch (Exception e) {
            System.out.println("Jspex14DbConnect err : " + e);
        }
    }

    public ArrayList<JikwonDto> getJikwon(String busername) {
        ArrayList<JikwonDto> list = new ArrayList<>();
        try{
            conn = DriverManager.getConnection("jdbc:mariadb://localhost:3306/test", "root", "123");
            String sql = "SELECT jikwonno, jikwonname, jikwonjik, jikwongen, jikwonpay FROM jikwon JOIN buser ON buserno=busernum WHERE busername=?";
            pstmt = conn.prepareStatement(sql);
            pstmt.setString(1, busername);
            rs = pstmt.executeQuery();

            while (rs.next()) {
                JikwonDto dto = new JikwonDto();
                dto.setJikwonno(rs.getString(1));
                dto.setJikwonname(rs.getString(2));
                dto.setJikwonjik(rs.getString(3));
                dto.setJikwongen(rs.getString(4));
                dto.setJikwonpay(rs.getInt(5));
                list.add(dto);
            }
        } catch (Exception e) {
            System.out.println("getJikwon err : " + e);
        } finally {
            try {
                if(rs != null) rs.close();
                if(pstmt != null) pstmt.close();
                if(conn != null) conn.close();
            } catch (Exception e2) {
                System.out.println("Closing Connection err : " + e2);
            }
        }
        return list;
    }
}
