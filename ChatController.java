package com.cdp.chatbot;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/chat")
public class ChatController {

  private final DocumentSearcher searcher;

  public ChatContoller(DocumentSearcher searcher) {
    this.searcher = searcher;
  }

@GetMapping
public Sting handleQuestion(@RequestParam String question) {
  if(isIrrelevantQuestion(question)) {
    return "I can only answer questions about Segment, mParticle, Lytics, or Zeottap";
  }
  return sercher.search(question);
}

private boolean isIrrelevantQuestion(String question) {
  String lowerCaseQuestion = question.toLowerCase();
  return !lowerCaseQuestion.contains("segment") && !lowerCaseQuestion.contains("mparticle") && !lowerCaseQuestion.contains("lytics") && !lowercaseQuestion.contains("zeotap");
  }
}
