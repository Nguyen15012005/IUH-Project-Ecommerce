package iuh.fit.backend.service;

import iuh.fit.backend.domain.AccountStatus;
import iuh.fit.backend.model.Seller;

import java.util.List;

/**
 * @author TrungNguyen
 * @created 4/21/2026
 * @description
 */
public interface SellerService {
    Seller getSellerProfile(String seller) throws Exception;
    Seller createSeller(Seller seller) throws Exception;
    Seller getSellerByEmail(String email) throws Exception;
    List<Seller> getAllSellers(AccountStatus status);
    Seller updateSeller(Long id, Seller seller);
    void deleteSeller(Long id);
    Seller verifyEmail(String email, String otp);
    Seller updateSellerAccountStatus(Long sellerId, AccountStatus status);
}
