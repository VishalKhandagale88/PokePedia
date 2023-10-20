package com.pokepedia.PokePediaService.domain;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

@ToString
@EqualsAndHashCode
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Data
@Document
public class Named {
    private int count;
    private String next;
    private String previous;


}
