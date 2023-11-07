package org.mong.gallery.backend.repository;

import org.mong.gallery.backend.entity.Item;
import org.mong.gallery.backend.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Integer> {
    Member findByEmailAndPassword(String email, String password);
}
