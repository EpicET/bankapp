package com.app.backend.repo;

import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.app.backend.model.Person;

@Repository
public interface PersonRepository extends MongoRepository<Person, ObjectId> {

    Optional<Person> getUserByUserID(String userID);

}
