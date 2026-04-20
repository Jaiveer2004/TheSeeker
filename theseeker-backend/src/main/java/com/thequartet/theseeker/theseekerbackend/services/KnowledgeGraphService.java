package com.thequartet.theseeker.theseekerbackend.services;

import com.thequartet.theseeker.theseekerbackend.entities.KnowledgePanel;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import tools.jackson.core.type.TypeReference;
import tools.jackson.databind.ObjectMapper;

import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class KnowledgeGraphService {

    private Map<String, KnowledgePanel> graph = new HashMap<>();
    private final ObjectMapper objectMapper;

    @PostConstruct
    public void init() {
        try {
            InputStream is = getClass().getResourceAsStream("/knowledge_graph.json");
            if (is != null) {
                graph = objectMapper.readValue(is, new TypeReference<Map<String, KnowledgePanel>>() {});
                System.out.println("Knowledge Graph Service loaded " + graph.size() + " entities!");
            } else {
                System.out.println("Knowledge Graph Service loaded " + graph.size() + " entities!");
            }
        } catch (Exception e) {
            System.out.println("Knowledge Graph Service loaded " + graph.size() + " entities!");
        }
    }

    public KnowledgePanel getPanel(String q) {
        if (q == null) return null;
        return graph.get(q.toLowerCase().trim());
    }
}
