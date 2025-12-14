package com.sweetshop.sweet;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "sweets")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Sweet {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(nullable = false)
  private String name;

  @Column(nullable = false)
  private String category;   // NEW FIELD

  @Column(nullable = false)
  private Double price;

  @Column(nullable = false)
  private Integer quantity;  // NEW FIELD

  @Column(name = "image_url")
  private String imageUrl;

  public Integer getQuantity() {
    return quantity;
  }


  void setQuantity(int i) {
        throw new UnsupportedOperationException("Not supported yet.");
    }

}
