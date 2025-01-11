package com.cdp.chatbot;

import java.util.HashMap;
import java.util.Map;

public class CDPComparator {

    private final Map<String, String> comparisons;

    public CDPComparator() {
        comparisons = new HashMap<>();
        comparisons.put("segment-vs-lytics", "Segment is better for integrations, while Lytics excels in audience segmentation.");
        comparisons.put("mparticle-vs-zeotap", "mParticle provides robust user profiles, while Zeotap focuses on data privacy and monetization.");
    }

    public String compare(String cdp1, String cdp2) {
        String key = cdp1.toLowerCase() + "-vs-" + cdp2.toLowerCase();
        return comparisons.getOrDefault(key, "Comparison data not available.");
    }
}
