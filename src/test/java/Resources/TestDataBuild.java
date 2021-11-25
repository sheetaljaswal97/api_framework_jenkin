package Resources;

import java.util.ArrayList;
import java.util.List;

import pojo.Get_Data;
import pojo.Location_data;

public class TestDataBuild {

	public Get_Data addPlacePayload(String Name, String Address, String Language)
	{
		
		Get_Data data= new Get_Data();
		data.setAccuracy(50);
//		data.setAddress("29, side layout, cohen 09");
		data.setAddress(Address);
	
//		data.setLanguage("French-IN");
		data.setLanguage(Language);
	
		data.setPhone_number("\"(+91) 983 893 3937");
		data.setWebsite("http://google.com");
//		data.setName("Frontline house");
		data.setName(Name);
		
		
		List <String> mylist= new ArrayList<String>();
		mylist.add("shoe park");
		mylist.add("shop");
		data.setTypes(mylist);

		Location_data data1= new Location_data();
		data1.setLat(-38.383494);
		data1.setLng(33.427362);

		data.setLocation(data1);
		
		return data;
		
		
	}
		
	public String DeletePlacePayload(String PlaceID)
	{
	 return "{\r\n    \"place_id\":\""+PlaceID+"\"   \t \t\r\n}";
	}



}
