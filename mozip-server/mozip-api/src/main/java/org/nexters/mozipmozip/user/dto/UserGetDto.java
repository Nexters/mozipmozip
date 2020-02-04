package org.nexters.mozipmozip.user.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PACKAGE)
public class UserGetDto {
    private String name;
    private String email;
    private boolean isAdmin;

   @Builder
   public UserGetDto(String name,String email,boolean isAdmin){
       this.name=name;
       this.email=email;
       this.isAdmin=isAdmin;
   }
}
