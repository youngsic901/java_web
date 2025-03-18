package pack;

import java.io.FileInputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.Properties;

public class Jspex14DbConnect {
    private Connection conn;
    private PreparedStatement pstmt;
    private ResultSet rs;
    private Properties properties = new Properties();

    public Jspex14DbConnect() {
        try{
            properties.load(new FileInputStream("c:/work/intellij_web/java_web/web4jsp/src/main/resources/DBinfo.properties"));
            Class.forName(properties.getProperty("driver"));
        } catch (Exception e) {
            System.out.println("Jspex14DbConnect err : " + e);
        }
    }

    public ArrayList<JikwonDto> getJikwon(String busername) {
        ArrayList<JikwonDto> list = new ArrayList<>();
        try{
            conn = DriverManager.getConnection(properties.getProperty("url"), properties.getProperty("user"), properties.getProperty("password"));
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
