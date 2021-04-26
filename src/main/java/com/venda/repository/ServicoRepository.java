package com.venda.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.venda.entity.Servico;

public interface ServicoRepository extends JpaRepository<Servico, Long> {}