package com.turtle.web.cgv;

import java.util.ArrayList;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.turtle.web.pxy.CGVProxy;

@RestController
@RequestMapping("/cgv")
public class CGVController {

	@Autowired CGVProxy cgvcrawler;
//	@GetMapping("/")
//	public ArrayList<HashMap<String, String>> cgvTest(){
//		return cgvcrawler.cgvCrawling("http://www.cgv.co.kr/movies/");
//	}
	@GetMapping("/")	
	public ArrayList<HashMap<String, String>> cgvTest(){
		return cgvcrawler.cgvCrawling();
	}
}
