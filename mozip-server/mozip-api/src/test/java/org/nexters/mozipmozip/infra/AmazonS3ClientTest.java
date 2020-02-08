package org.nexters.mozipmozip.infra;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@Disabled
class AmazonS3ClientTest {

    @Autowired
    private AmazonS3Client amazonS3Client;

    @Test
    void upload() {
        MultipartFile file = new MockMultipartFile("file", "orig", null, "mock".getBytes());
        String filename = amazonS3Client.upload(file);

        assertThat(filename).isNotNull();
    }
}
