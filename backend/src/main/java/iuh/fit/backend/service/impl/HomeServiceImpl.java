package iuh.fit.backend.service.impl;

import iuh.fit.backend.model.Home;
import iuh.fit.backend.model.HomeCategory;
import iuh.fit.backend.service.HomeService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author TrungNguyen
 * @created 5/1/2026
 * @description
 */

@Service
@RequiredArgsConstructor
public class HomeServiceImpl implements HomeService {

    @Override
    public Home createHomePageData(List<HomeCategory> allCategories) {
        return null;
    }
}
