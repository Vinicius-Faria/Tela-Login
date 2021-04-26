package com.venda.exception;

import org.springframework.web.server.ResponseStatusException;

public class ClienteException extends RuntimeException {

	private static final long serialVersionUID = 1L;
	
	public ClienteException(String message) {
		super(message);
	}
	
	public ClienteException(String message, ResponseStatusException cause) {
		super(message, cause);
	}
}
