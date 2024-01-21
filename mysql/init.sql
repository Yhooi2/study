drop procedure if exists run_script;

delimiter $$
create procedure run_script (script_name varchar(100))
begin
   declare full_path varchar(500);
   set full_path = concat('/home/art/study/study/mysql/scripts/', script_name);
   select full_path;
   source full_path;
end $$
delimiter ;
