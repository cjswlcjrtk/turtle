package com.turtle.web.pxy;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.function.BiFunction;
import java.util.function.Function;

import org.springframework.stereotype.Component;


@Component("pxy")
public class Proxy {
	public int integer(String param) {
		Function<String, Integer> f = Integer :: parseInt;
		return f.apply(param);
	}
	
	public String string(Object object) {
		Function<String, String> f = String :: valueOf;
		return f.apply((String) object);
	}
	
	public boolean equal(String p1, String p2) {
		BiFunction<String, String, Boolean> f = String :: equals;
		return f.apply(p1,p2);		
	}
	
	public int random(int a, int b) {
		BiFunction<Integer, Integer, Integer> f =(t,u)->(int)(Math.random()*(u-t))+t;
		return f.apply(a, b);		
	}
	
	public int[] intArray(int size) {
		Function<Integer, int[]> f = int[] :: new;
		return f.apply(size);
	}
	
	public String CurrentDate() {
		return new SimpleDateFormat("yyyy-MM-dd").format(new Date());
	}
	
	public String CurrentTime() {
		return  new SimpleDateFormat("yyyy-MM-dd hh:mm:ss").format(new Date());
	}
	
	
}