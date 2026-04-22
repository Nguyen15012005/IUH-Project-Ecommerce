package iuh.fit.backend.service.impl;

import iuh.fit.backend.config.JwtProvider;
import iuh.fit.backend.domain.AccountStatus;
import iuh.fit.backend.model.Address;
import iuh.fit.backend.model.Seller;
import iuh.fit.backend.repository.AddressRepository;
import iuh.fit.backend.repository.SellerRepository;
import iuh.fit.backend.service.SellerService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author TrungNguyen
 * @created 4/21/2026
 * @description
 */

@Service
@RequiredArgsConstructor
public class SellerServiceImpl implements SellerService {

    private final SellerRepository sellerRepository;
    private final JwtProvider jwtProvider;
    private final PasswordEncoder passwordEncoder;
    private final AddressRepository addressRepository;

    @Override
    public Seller getSellerProfile(String jwt) throws Exception {
        String email = jwtProvider.getEmailFromJwtToken(jwt);

        return this.getSellerByEmail(email);
    }

    @Override
    public Seller createSeller(Seller seller) throws Exception {
        Seller sellerExist = sellerRepository.findByEmail(seller.getEmail());
        if (sellerExist == null){
            throw new Exception("Seller already exist, used different email");
        }
        Address saveAddress = addressRepository.save(seller.getPickupAddress());

        return null;
    }

    @Override
    public Seller getSellerByEmail(String email) throws Exception {
        Seller seller = sellerRepository.findByEmail(email);

        if (seller == null){
            throw new Exception("Seller not found ...");
        }
        return seller;
    }

    @Override
    public List<Seller> getAllSellers(AccountStatus status) {
        return List.of();
    }

    @Override
    public Seller updateSeller(Long id, Seller seller) {
        return null;
    }

    @Override
    public void deleteSeller(Long id) {

    }

    @Override
    public Seller verifyEmail(String email, String otp) {
        return null;
    }

    @Override
    public Seller updateSellerAccountStatus(Long sellerId, AccountStatus status) {
        return null;
    }
}
