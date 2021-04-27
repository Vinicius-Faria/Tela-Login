package com.venda.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.venda.entity.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Long>{}