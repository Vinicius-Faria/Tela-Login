package com.venda.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.venda.entity.Produto;
import com.venda.repository.ProdutoRepository;

@Service
public class ProdutoService {

	@Autowired
	private ProdutoRepository produtoRepository;

	public List<Produto> findAll() {
		return produtoRepository.findAll();
	}

	public Produto save(Produto produto) {
		produto.setId(null);
		return produtoRepository.save(produto);	
	}

	public Optional<Produto> findById(Long id) {

		return produtoRepository.findById(id);
	}

	public void delete(Long id) {
		produtoRepository.deleteById(id);
	}

	public void update(Produto produto) {
		var upProduto = findById(produto.getId()).get();
		BeanUtils.copyProperties(produto, upProduto);
		produtoRepository.save(upProduto);
	}
	
}
