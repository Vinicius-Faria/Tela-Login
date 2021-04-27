package com.venda.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.venda.entity.Cliente;
import com.venda.exception.ClienteException;
import com.venda.repository.ClienteRepository;

@Service
public class ClienteService {

	@Autowired
	private ClienteRepository clienteRepository;

	private Optional<Cliente> cliente;

	public List<Cliente> findAll() {
		return clienteRepository.findAll();
	}

	public Cliente save(Cliente cliente) {
		cliente.setId(null);
		return clienteRepository.save(cliente);	
	}

	public Optional<Cliente> findById(Long id) {

		cliente = clienteRepository.findById(id);

		if(cliente.isEmpty()) {
			throw new ClienteException("Cliente não encontrado", new  ResponseStatusException(HttpStatus.NOT_FOUND));
		}
		return cliente;
	}

	public void delete(Long id) {
		clienteRepository.deleteById(id);
	}

	public void update(Cliente cliente) {
		var upProduto = findById(cliente.getId()).get();
		BeanUtils.copyProperties(cliente, upProduto);
		clienteRepository.save(upProduto);
	}

}
