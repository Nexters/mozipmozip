package org.nexters.mozipmozip.config;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import software.amazon.awssdk.auth.credentials.ContainerCredentialsProvider;
import software.amazon.awssdk.auth.credentials.EnvironmentVariableCredentialsProvider;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.s3.S3Client;

@Configuration
@EnableConfigurationProperties(AmazonS3Properties.class)
@RequiredArgsConstructor
public class AmazonS3Config {
    private static final Region DEFAULT_REGION = Region.AP_NORTHEAST_2;

    @Bean
    @Profile("local")
    public S3Client localS3Client() {
        return S3Client.builder()
                .region(DEFAULT_REGION)
                .credentialsProvider(EnvironmentVariableCredentialsProvider.create())
                .build();
    }

    @Bean
    @Profile("!local")
    public S3Client s3client() {
        return S3Client.builder()
                .region(DEFAULT_REGION)
                .credentialsProvider(ContainerCredentialsProvider.builder().build())
                .build();
    }
}
