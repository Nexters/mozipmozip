package org.nexters.mozipmozip.infra;

import lombok.RequiredArgsConstructor;
import org.nexters.mozipmozip.config.AmazonS3Properties;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import software.amazon.awssdk.core.sync.RequestBody;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.ObjectCannedACL;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;

import java.nio.ByteBuffer;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AmazonS3Client {
    private final AmazonS3Properties amazonS3Properties;
    private final S3Client s3Client;

    private static final Logger log = LoggerFactory.getLogger(AmazonS3Client.class);

    public String upload(MultipartFile file) {
        String filename = UUID.randomUUID().toString();

        try {
            s3Client.putObject(
                    PutObjectRequest.builder()
                            .bucket(amazonS3Properties.getName())
                            .key(filename)
                            .acl(ObjectCannedACL.PUBLIC_READ)
                            .build(),
                    RequestBody.fromByteBuffer(ByteBuffer.wrap(file.getBytes()))
            );
        } catch (Exception e) {
            log.error("s3 업로드 실패", e);
            throw new IllegalStateException("파일 업로드 실패했어~ 수고해");
        }

        return amazonS3Properties.getEndpoint().concat(filename);
    }
}
