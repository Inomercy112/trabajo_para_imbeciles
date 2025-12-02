package com.example.demo.controller;

import com.example.demo.entity.Person;
import com.example.demo.service.PersonService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/person")
public class PersonController {

    private final PersonService personService;

    public  PersonController(PersonService personService){
        this.personService = personService;
    }

    @GetMapping("/all")
    public List<Person> getAll(){
        return personService.getAll();
    }
    @PostMapping("/add")
    public Person add(@RequestBody Person person){
        return personService.save(person);
    }
    @PutMapping("/update/{id}")
    public Person update(@RequestBody Person person, @RequestParam Long id){
        person.setId(id);
        return personService.save(person);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@RequestParam Long id){
        try {
            personService.delete(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

}
