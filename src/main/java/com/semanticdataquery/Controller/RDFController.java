package com.semanticdataquery.Controller;

import com.semanticdataquery.DTO.SelectQueryResponseDTO;
import com.semanticdataquery.Util.Impl.RDFHelperImpl;
import com.semanticdataquery.Util.RDFHelper;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RDFController {

    RDFHelper rdfHelper = new RDFHelperImpl();

    @PostMapping("/query")
    public SelectQueryResponseDTO processQuery(@RequestBody String queryString) {
        return rdfHelper.getResultsFromQuery(queryString);
    }
}
