package com.sweetshop.auth;

import com.sweetshop.security.JwtService;
import com.sweetshop.user.UserRepository;
import com.sweetshop.user.Role;
import com.sweetshop.user.User;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public AuthService(UserRepository userRepository,
                       PasswordEncoder passwordEncoder,
                       JwtService jwtService) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

   public AuthResponse register(RegisterRequest request) {

    User user = new User();
    user.setUsername(request.getUsername());
    user.setPassword(passwordEncoder.encode(request.getPassword()));
    user.setRole(request.getRole().toUpperCase());

    userRepository.save(user);

    String token = jwtService.generateToken(user);
    return new AuthResponse(token);
}

public AuthResponse login(AuthRequest request) {

    User user = userRepository.findByUsername(request.getUsername())
            .orElseThrow(() -> new RuntimeException("User not found"));

    if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
        throw new RuntimeException("Invalid credentials");
    }

    String token = jwtService.generateToken(user);
    return new AuthResponse(token);
}

}
