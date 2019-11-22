package com.turtle.web.pxy;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;

import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component("cgvcrawler") 
public class CGVProxy extends Proxy{
	
	@Autowired Box<HashMap<String, String>> box;
	
	public ArrayList<HashMap<String, String>> cgvCrawling(){
		box.clear();	
		String cgvUrl = "http://www.cgv.co.kr/movies/?lt=3";
		try {
			Document rawData = Jsoup.connect(cgvUrl).timeout(10*1000).get();
			Elements txtArtistRank = 
					rawData.select("div[class=sect-movie-chart] strong[class=rank]");
			Elements txtArtistTitle = 
					rawData.select("div[class=sect-movie-chart] strong[class=title]");
			Elements txtArtistPrecent = 
					rawData.select("div[class=sect-movie-chart] strong[class=percent]");
			Elements txtArtistTextinfo = 
					rawData.select("div[class=sect-movie-chart] span[class=txt-info]");
			Elements txtArtistPhoto = 
					rawData.select("div[class=sect-movie-chart] span[class=thumb-image]");
//			int cgvseq = 0;
			HashMap<String, String> map = null;			
			for(int i = 0 ;i<txtArtistRank.size(); i++) {		
				map = new HashMap<>();
				map.put("txtArtistRank", txtArtistRank.get(i).text());
				map.put("txtArtistTitle", txtArtistTitle.get(i).text());
				map.put("txtArtistPrecent", txtArtistPrecent.get(i).text());
				map.put("txtArtistTextinfo", txtArtistTextinfo.get(i).text());
				map.put("txtArtistPhoto", txtArtistPhoto.get(i).select("img").attr("src"));
				box.add(map);
//				cgvseq ++;
			}			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		System.out.println("==================================================");
		box.get().forEach(System.out :: println);
		return box.get();		
	}
}
