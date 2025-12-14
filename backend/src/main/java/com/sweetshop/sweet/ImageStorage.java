package com.sweetshop.sweet;

import org.springframework.web.multipart.MultipartFile;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;

public class ImageStorage {

    private final Path uploadDir = Path.of("uploads");

    public ImageStorage() {
        try {
            if (!Files.exists(uploadDir))
                Files.createDirectories(uploadDir);
        } catch (Exception ignored) {}
    }

    public String saveImage(MultipartFile file) {
        try {
            String filename = System.currentTimeMillis() + "_" + file.getOriginalFilename();
            Path targetPath = uploadDir.resolve(filename);

            Files.copy(file.getInputStream(), targetPath, StandardCopyOption.REPLACE_EXISTING);
            return "/uploads/" + filename; // Serve via static folder
        } catch (Exception e) {
            throw new RuntimeException("Image save failed");
        }
    }
}
