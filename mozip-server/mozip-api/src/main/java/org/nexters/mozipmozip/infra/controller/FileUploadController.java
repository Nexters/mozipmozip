package org.nexters.mozipmozip.infra.controller;

import lombok.RequiredArgsConstructor;
import org.nexters.mozipmozip.infra.AmazonS3Client;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/v1/files")
@RequiredArgsConstructor
public class FileUploadController {
    private final AmazonS3Client amazonS3Client;

    @PostMapping
    public ResponseEntity<String> upload(@RequestParam("file") MultipartFile multipartFile) {
        return ResponseEntity.ok(amazonS3Client.upload(multipartFile));
    }
}
