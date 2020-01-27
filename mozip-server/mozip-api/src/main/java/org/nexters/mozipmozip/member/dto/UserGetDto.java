package org.nexters.mozipmozip.member.dto;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PACKAGE) //builder로 생성하기위해??
public class UserGetDto {
    private String name;
    private String email;
    private String phoneNumber;
    private boolean isAdmin;

   @Builder
   public UserGetDto(String name,String email,String phoneNumber,boolean isAdmin){
       this.name=name;
       this.email=email;
       this.phoneNumber=phoneNumber;
       this.isAdmin=isAdmin;
   }
}
