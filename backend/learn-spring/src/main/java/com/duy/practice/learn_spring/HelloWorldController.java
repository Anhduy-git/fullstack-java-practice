package com.duy.practice.learn_spring;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {
    @GetMapping("/hello-world")
    public HelloWorld helloWorld() {
        return new HelloWorld("Hello world");
    }
}
