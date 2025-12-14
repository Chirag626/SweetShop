package com.sweetshop.sweet;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import java.util.List;

@Service
public class SweetService {

    private final SweetRepository sweetRepository;
    private final ImageStorage storage = new ImageStorage();

    public SweetService(SweetRepository sweetRepository) {
        this.sweetRepository = sweetRepository;
    }

    // CREATE with image
    public Sweet addSweetWithImage(String name, String category, Double price, Integer quantity, MultipartFile image) {

        String url = (image != null && !image.isEmpty())
                ? storage.saveImage(image)
                : null;

        Sweet s = Sweet.builder()
                .name(name)
                .category(category)
                .price(price)
                .quantity(quantity != null ? quantity : 0)
                .imageUrl(url)
                .build();

        return sweetRepository.save(s);
    }

    // LIST
    public List<Sweet> getAllSweets() {
        return sweetRepository.findAll();
    }

    // SEARCH
    public List<Sweet> searchSweets(String name, String category, Double min, Double max) {
        return sweetRepository.search(name, category, min, max);
    }

    // UPDATE with optional image
    public Sweet updateWithImage(Long id, String name, String category, Double price, Integer quantity, MultipartFile image) {

        Sweet s = sweetRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Sweet not found"));

        if (name != null) s.setName(name);
        if (category != null) s.setCategory(category);
        if (price != null) s.setPrice(price);
        if (quantity != null) s.setQuantity(quantity);

        if (image != null && !image.isEmpty()) {
            String url = storage.saveImage(image);
            s.setImageUrl(url);
        }

        return sweetRepository.save(s);
    }

    // DELETE
    public void deleteSweet(Long id) {
        sweetRepository.deleteById(id);
    }

    // PURCHASE
    public Sweet purchase(Long id, int qty) {
        Sweet s = sweetRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Sweet not found"));

        if (s.getQuantity() < qty) {
            throw new RuntimeException("Not enough stock!");
        }

        s.setQuantity(s.getQuantity() - qty);
        return sweetRepository.save(s);
    }

    // RESTOCK
    public Sweet restock(Long id, int amount) {
        Sweet s = sweetRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Sweet not found"));

        s.setQuantity(s.getQuantity() + amount);
        return sweetRepository.save(s);
    }
}
