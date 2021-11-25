package Resources;

import java.net.URI;

public enum Api_Resources {
	
	AddPlaceAPI("/maps/api/place/add/json"),
	GetPlaceAPI("/maps/api/place/get/json"),
	DeletePlaceAPI("/maps/api/place/delete/json");
	private String resource;
	
	Api_Resources(String resource)
	{
		this.resource=resource;
	}
	
	public String get_Resource()
	{
	 return resource;
	}

	

}
