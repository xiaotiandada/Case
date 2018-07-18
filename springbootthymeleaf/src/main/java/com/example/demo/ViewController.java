package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ViewController {
    @RequestMapping(value = "/")
    public String index(Model model) {
        model.addAttribute("title","后台布局");
        return "index";
    }
}
