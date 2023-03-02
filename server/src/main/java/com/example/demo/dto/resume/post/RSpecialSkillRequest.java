package com.example.demo.dto.resume.post;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RSpecialSkillRequest {
    public String name;

    public String talk;

    public String special;

}
