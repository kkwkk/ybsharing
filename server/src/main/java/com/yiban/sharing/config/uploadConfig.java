package com.yiban.sharing.config;

import org.springframework.boot.web.servlet.MultipartConfigFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

import javax.servlet.MultipartConfigElement;

@Configuration
@Component
public class uploadConfig {

        @Bean
    public MultipartConfigElement multipartConfigElement(){
            MultipartConfigFactory factorys = new MultipartConfigFactory();
            //单个文件最大
            //KB,MB
            factorys.setMaxFileSize("10240KB");
            /// 设置总上传数据总大小
            factorys.setMaxRequestSize("102400KB");
            return factorys.createMultipartConfig();
    }
}
