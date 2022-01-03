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

import com.venda.entity.Produto;
import com.venda.service.ProdutoService;

@RestController
@RequestMapping("produtos")
@CrossOrigin("http://localhost:4200")
public class ProdutoController {
	
	@Autowired
	private ProdutoService produtoService;

	
	@GetMapping
	public ResponseEntity<List<Produto>> all(){
		return ResponseEntity.status(HttpStatus.OK).body(produtoService.findAll());
	}
	
	@PostMapping
	public ResponseEntity<?> save(@Valid @RequestBody Produto produto) {
		
		produto = produtoService.save(produto);		
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
							.path("/{id}").buildAndExpand(produto.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Optional<Produto>> one(@PathVariable Long id) {
		return ResponseEntity.status(HttpStatus.OK).body(produtoService.findById(id));
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id){
		produtoService.delete(id);
		return ResponseEntity.noContent().build();
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Void> update(@RequestBody Produto produto, @PathVariable Long id) {
		produto.setId(id);
		produtoService.update(produto);
		return ResponseEntity.noContent().build();
	}
	
}
