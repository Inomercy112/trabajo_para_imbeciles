package com.example.demo.service;

import com.example.demo.entity.Person;
import com.example.demo.repository.PersonRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonService {

    private final PersonRepository personRepository;

    public PersonService(PersonRepository personRepository){
        this.personRepository = personRepository;
    }

    public List<Person> getAll() {
        return personRepository.findAll();
    }

    public Person save(Person person){
        return personRepository.save(person);
    }

    public void delete(Long id){
        Person person = personRepository.getReferenceById(id);
        personRepository.delete(person);
    }

}
