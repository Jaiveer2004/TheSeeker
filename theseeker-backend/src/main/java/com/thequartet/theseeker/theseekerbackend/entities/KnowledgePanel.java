package com.thequartet.theseeker.theseekerbackend.entities;

import lombok.Data;

import java.util.List;
import java.util.Map;

@Data
public class KnowledgePanel {
    private String title;
    private String subtitle;
    private String description;
    private List<String> imageUrls;

    private Map<String, String> facts;
}
