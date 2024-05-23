--------------------------------------------------------
--  File created - Wednesday-May-22-2024   
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Table WATCHLIST
--------------------------------------------------------

  CREATE TABLE "SCOTT"."WATCHLIST" 
   (	"WATCHLIST_ID" NUMBER(*,0), 
	"USER_ID" NUMBER(*,0), 
	"MOVIE_ID" NUMBER(*,0), 
	"CREATED_AT" TIMESTAMP (6) DEFAULT CURRENT_TIMESTAMP
   )  DEFAULT COLLATION "USING_NLS_COMP" SEGMENT CREATION DEFERRED 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  TABLESPACE "USERS" ;
REM INSERTING into SCOTT.WATCHLIST
SET DEFINE OFF;
--------------------------------------------------------
--  DDL for Index SYS_C0013260
--------------------------------------------------------

  CREATE UNIQUE INDEX "SCOTT"."SYS_C0013260" ON "SCOTT"."WATCHLIST" ("WATCHLIST_ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Trigger WATCHLIST_BEFORE_INSERT
--------------------------------------------------------

  CREATE OR REPLACE EDITIONABLE TRIGGER "SCOTT"."WATCHLIST_BEFORE_INSERT" 
BEFORE INSERT ON Watchlist
FOR EACH ROW
BEGIN
    :new.watchlist_id := watchlist_seq.NEXTVAL;
END;

/
ALTER TRIGGER "SCOTT"."WATCHLIST_BEFORE_INSERT" ENABLE;
--------------------------------------------------------
--  Constraints for Table WATCHLIST
--------------------------------------------------------

  ALTER TABLE "SCOTT"."WATCHLIST" ADD PRIMARY KEY ("WATCHLIST_ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 
  TABLESPACE "USERS"  ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table WATCHLIST
--------------------------------------------------------

  ALTER TABLE "SCOTT"."WATCHLIST" ADD FOREIGN KEY ("USER_ID")
	  REFERENCES "SCOTT"."USERS" ("USER_ID") ENABLE;
  ALTER TABLE "SCOTT"."WATCHLIST" ADD FOREIGN KEY ("MOVIE_ID")
	  REFERENCES "SCOTT"."MOVIES" ("MOVIE_ID") ENABLE;
