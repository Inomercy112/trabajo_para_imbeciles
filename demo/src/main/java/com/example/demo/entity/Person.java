package com.example.demo.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Data

public class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private Long document;

    //many la que tiene la llave foranea
    @ManyToOne
    @JoinColumn(name = "person_type_id") // FK en la tabla Person
    private PersonType personType;



}
