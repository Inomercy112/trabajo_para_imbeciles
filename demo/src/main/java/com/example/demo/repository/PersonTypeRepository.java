package com.example.demo.repository;

import com.example.demo.entity.PersonType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonTypeRepository extends JpaRepository<PersonType, Long> {
}
