package com.sweetshop.sweet;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.security.access.prepost.PreAuthorize;
import java.util.List;

@RestController
@RequestMapping("/api/sweets")
public class SweetController {

    private final SweetService sweetService;

    public SweetController(SweetService sweetService) {
        this.sweetService = sweetService;
    }

    // -----------------------------
    // ADD sweet with image
    // -----------------------------
    @PostMapping(value = "/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Sweet> uploadSweet(
            @RequestPart("name") String name,
            @RequestPart("category") String category,
            @RequestPart("price") Double price,
            @RequestPart("quantity") Integer quantity,
            @RequestPart(value = "image", required = false) MultipartFile image
    ) {
        return ResponseEntity.ok(
                sweetService.addSweetWithImage(name, category, price, quantity, image)
        );
    }

    // -----------------------------
    // LIST
    // -----------------------------
    @GetMapping
    public ResponseEntity<List<Sweet>> getAllSweets() {
        return ResponseEntity.ok(sweetService.getAllSweets());
    }

    // -----------------------------
    // SEARCH
    // -----------------------------
    @GetMapping("/search")
    public ResponseEntity<List<Sweet>> search(
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String category,
            @RequestParam(required = false) Double minPrice,
            @RequestParam(required = false) Double maxPrice
    ) {
        return ResponseEntity.ok(
                sweetService.searchSweets(name, category, minPrice, maxPrice)
        );
    }

    // -----------------------------
    // UPDATE sweet with image
    // -----------------------------
    @PutMapping(value = "/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Sweet> update(
            @PathVariable Long id,
            @RequestPart(required = false) String name,
            @RequestPart(required = false) String category,
            @RequestPart(required = false) Double price,
            @RequestPart(required = false) Integer quantity,
            @RequestPart(value = "image", required = false) MultipartFile image
    ) {
        return ResponseEntity.ok(
                sweetService.updateWithImage(id, name, category, price, quantity, image)
        );
    }

    // -----------------------------
    // DELETE
    // -----------------------------
    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        sweetService.deleteSweet(id);
        return ResponseEntity.ok("Sweet deleted.");
    }

    // -----------------------------
    // PURCHASE
    // -----------------------------
    @PostMapping("/{id}/purchase")
    public ResponseEntity<Sweet> purchase(
            @PathVariable Long id,
            @RequestParam(defaultValue = "1") int quantity
    ) {
        return ResponseEntity.ok(sweetService.purchase(id, quantity));
    }

    // -----------------------------
    // RESTOCK
    // -----------------------------
    @PostMapping("/{id}/restock")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Sweet> restock(
            @PathVariable Long id,
            @RequestParam(defaultValue = "10") int amount
    ) {
        return ResponseEntity.ok(sweetService.restock(id, amount));
    }
}
