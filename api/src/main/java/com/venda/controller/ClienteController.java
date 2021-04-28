package com.venda.controller;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.venda.entity.Cliente;
import com.venda.service.ClienteService;

@RestController
@RequestMapping("clientes")
@CrossOrigin("http://localhost:4200")
public class ClienteController {

	@Autowired
	private ClienteService clienteService;
	
	
	@GetMapping
	public ResponseEntity<List<Cliente>> all(){
		return ResponseEntity.status(HttpStatus.OK).body(clienteService.findAll());
	}
	
	@PostMapping
	public ResponseEntity<?> save(@Valid @RequestBody Cliente cliente) {
		
		cliente = clienteService.save(cliente);		
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
							.path("/{id}").buildAndExpand(cliente.getId()).toUri();
		
		return ResponseEntity.created(uri).build();
		
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Optional<Cliente>> one(@PathVariable Long id) {
		return ResponseEntity.status(HttpStatus.OK).body(clienteService.findById(id));
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id){
		clienteService.delete(id);
		return ResponseEntity.noContent().build();
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Void> update(@RequestBody Cliente cliente, @PathVariable Long id) {
		cliente.setId(id);
		clienteService.update(cliente);
		return ResponseEntity.noContent().build();
	}
	
}
