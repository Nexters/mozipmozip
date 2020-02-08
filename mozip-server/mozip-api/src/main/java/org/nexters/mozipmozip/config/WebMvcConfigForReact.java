package org.nexters.mozipmozip.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfigForReact implements WebMvcConfigurer {
    public static String FORWARD_VIEW_NAME = "forward:/index.html";

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/")
                .setViewName(FORWARD_VIEW_NAME);
        registry.addViewController("/{x:[\\w\\-]+}")
                .setViewName(FORWARD_VIEW_NAME);
        registry.addViewController("/{x:^(?!api).*$}/**/{y:[\\w\\-]+}")
                .setViewName(FORWARD_VIEW_NAME);
        registry.addViewController("/{x:^(?!swagger-ui$).*$}/**/{y:[\\w\\-]+}")
                .setViewName(FORWARD_VIEW_NAME);
    }
}
