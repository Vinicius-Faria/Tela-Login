package com.venda.exception;

import org.springframework.web.server.ResponseStatusException;

public class ProdutoException extends RuntimeException {

private static final long serialVersionUID = 1L;
	
	public ProdutoException(String message) {
		super(message);
	}
	
	public ProdutoException(String message, ResponseStatusException cause) {
		super(message, cause);
	}
	
}
