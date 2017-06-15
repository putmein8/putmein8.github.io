

(function($) {
	//defaults
	var names = []
	var full_story = 'Once upon a time, Joe and Sam went to Nassau and started their very own erotica website called Put Me In.';
	var male_names = ['Jeb', 'Michael', 'Heyward', 'Christopher', 'Matthew', 'Joshua', 'Jacob', 'Andrew', 'Daniel', 'Nicholas', 'Tyler', 'Joseph', 'David', 'Brandon', 'James', 'John', 'Ryan', 'Zachary', 'Justin', 'Anthony', 'William', 'Robert', 'Jonathan', 'Kyle', 'Austin', 'Alexander', 'Kevin', 'Cody', 'Thomas', 'Jordan', 'Eric', 'Benjamin', 'Aaron', 'Jose', 'Christian', 'Steven', 'Samuel', 'Brian', 'Dylan', 'Timothy', 'Adam', 'Nathan', 'Richard', 'Sean', 'Charles', 'Patrick', 'Jason', 'Luis', 'Jeremy', 'Stephen', 'Mark', 'Jesse', 'Juan', 'Alex', 'Cameron', 'Travis', 'Jeffrey', 'Bryan', 'Caleb', 'Carlos', 'Jared', 'Ethan', 'Kenneth', 'Taylor', 'Logan', 'Paul', 'Trevor', 'Dustin', 'Evan', 'Gabriel', 'Ian', 'Gregory', 'Connor', 'Devin', 'Derek', 'Corey', 'Scott', 'Jesus', 'Nathaniel', 'Hunter', 'Bradley', 'Edward', 'Dakota', 'Antonio', 'Victor', 'Marcus', 'Blake', 'Garrett', 'Peter', 'Miguel', 'Mitchell', 'Noah', 'Shane', 'Shawn', 'Luke', 'Adrian', 'Seth', 'Spencer', 'Chase', 'Vincent', 'Jorge', 'Lucas', 'Isaac', 'Cory', 'Tanner', 'George', 'Brett', 'Joel', 'Erik', 'Raymond', 'Dalton', 'Alejandro', 'Cole', 'Jack', 'Ricardo', 'Dillon', 'Isaiah', 'Jake', 'Elijah', 'Mason', 'Casey', 'Eduardo', 'Colton', 'Francisco', 'Keith', 'Donald', 'Wesley', 'Chad', 'Devon', 'Phillip', 'Oscar', 'Colin', 'Johnathan', 'Brendan', 'Julian', 'Ronald', 'Mario', 'Alec', 'Manuel', 'Bryce', 'Grant', 'Xavier', 'Martin', 'Henry', 'Javier', 'Alan', 'Dominic', 'Edgar', 'Omar', 'Derrick', 'Hector', 'Douglas', 'Frank', 'Tristan', 'Collin', 'Troy', 'Roberto', 'Jeremiah', 'Jonathon', 'Sergio', 'Fernando', 'Philip', 'Andre', 'Johnny', 'Edwin', 'Ivan', 'Cristian', 'Clayton', 'Levi', 'Curtis', 'Gary', 'Darius', 'Nicolas', 'Dennis', 'Andres', 'Jackson', 'Maxwell', 'Cesar', 'Drew', 'Randy', 'Pedro', 'Ruben', 'Alexis', 'Brent', 'Allen', 'Marco', 'Max', 'Julio', 'Riley', 'Mathew', 'Wyatt', 'Malik', 'Jerry', 'Craig', 'Calvin', 'Tony', 'Rafael', 'Preston', 'Erick', 'Brady', 'Larry', 'Raul', 'Emmanuel', 'Jeffery', 'Carl', 'Jimmy', 'Zachery', 'Hayden', 'Gavin', 'Kristopher', 'Trenton', 'Albert', 'Colby', 'Russell', 'Jaime', 'Sebastian', 'Parker', 'Louis', 'Danny', 'Alberto', 'Ricky', 'Chance', 'Darren', 'Kaleb', 'Rodney', 'Gerardo', 'Marc', 'Lawrence', 'Micheal', 'Micah', 'Damian', 'Harrison', 'Lance', 'Terry', 'Joe', 'Marcos', 'Trey', 'Conner', 'Abraham', 'Giovanni', 'Armando', 'Dominique', 'Diego', 'Arthur', 'Josue', 'Walter', 'Gage', 'Skyler', 'Todd', 'Bobby', 'Enrique', 'Donovan', 'Chandler', 'Andy', 'Ramon', 'Billy', 'Zackary', 'Roger', 'Ross', 'Landon', 'Jay', 'Trent', 'Jamal', 'Willie', 'Israel', 'Randall', 'Branden', 'Alfredo', 'Deandre', 'Gerald', 'Jamie', 'Jalen', 'Jon', 'Morgan', 'Nickolas', 'Reginald', 'Nolan', 'Theodore', 'Bryant', 'Lee', 'Liam', 'Dante', 'Arturo', 'Marvin', 'Maurice', 'Terrance', 'Eddie', 'Josiah', 'Kelvin', 'Malcolm', 'Kody', 'Gustavo', 'Miles', 'Lorenzo', 'Dallas', 'Marquis', 'Shaun', 'Nelson', 'Jessie', 'Roy', 'Salvador', 'Johnathon', 'Ty', 'Brock', 'Tevin', 'Tommy', 'Dominick', 'Jonah', 'Avery', 'Damien', 'Damon', 'Conor', 'Orlando', 'Owen', 'Ashton', 'Frederick', 'Brennan', 'Fabian', 'Bruce', 'Dean', 'Clinton', 'Rene', 'Demetrius', 'Marshall', 'Pablo', 'Zachariah', 'Carter', 'Zane', 'Bailey', 'Steve', 'Wayne', 'Ismael', 'Ernesto', 'Quentin', 'Terrence', 'Terrell', 'Quinton', 'Carson', 'Felix', 'Ronnie', 'Darrell', 'Desmond', 'Elias', 'Byron', 'Kendall', 'Eli', 'Tyrone', 'Neil', 'Angelo', 'Jerome', 'Melvin', 'Jakob', 'Simon', 'Francis', 'Brenden', 'Forrest', 'Franklin', 'Braden', 'Saul', 'Esteban', 'Drake', 'Emanuel', 'Zackery', 'Brendon', 'Griffin', 'Jarrett', 'Emilio', 'Guillermo', 'Roman', 'Geoffrey', 'Aidan', 'Alvin', 'Darryl', 'Leonard', 'Devante', 'Leonardo', 'Oliver', 'Tucker', 'Myles', 'Jean', 'Keegan', 'Dale', 'Ernest', 'Kameron', 'Cedric', 'Abel', 'Keenan', 'Kenny', 'Harry', 'Quinn', 'Eugene', 'Karl', 'Moises', 'Ray', 'Stanley', 'Jordon', 'Wade', 'Denzel', 'Lane', 'Weston', 'Devonte', 'Felipe', 'Cooper', 'Dwayne', 'Jarrod', 'Jermaine', 'Rodolfo', 'Kendrick', 'Sam', 'Tyrell', 'Glenn', 'Harold', 'Hugo', 'Gilberto', 'Beau', 'Graham', 'Donte', 'Kyler', 'Warren', 'Elliot', 'Joey', 'Kurt', 'Stefan', 'Clay', 'Isiah', 'Noel', 'Dane', 'Devan', 'Gilbert', 'Harley', 'Skylar', 'Corbin', 'Allan', 'Kristian', 'Alfred', 'Nikolas', 'Bryson', 'Jarred', 'Peyton', 'Rudy', 'Alfonso', 'Darian', 'Shaquille', 'Brad', 'Trevon', 'Elliott', 'Leo', 'Lukas', 'Ralph', 'Reid', 'Davis', 'Chris', 'Deshawn', 'Darnell', 'Wilson', 'Lewis', 'Charlie', 'Davon', 'Sheldon', 'Rodrigo', 'Justice', 'Leon', 'Jayson', 'Marlon', 'Ali', 'Rashad', 'Sterling', 'Ariel', 'Brody', 'Efrain', 'Julius', 'Rolando', 'Kurtis', 'Ramiro', 'Keaton', 'Tylor', 'Kelly', 'Mackenzie', 'Reed', 'Stephan', 'Bernard', 'Javon', 'Braxton', 'Derick', 'Payton', 'Barry', 'Earl', 'Marquise', 'Tyson', 'Clarence', 'Clint', 'Daquan', 'Garret', 'Blaine', 'Khalil', 'Santiago', 'Nathanael', 'Lamar', 'Perry', 'Alonzo', 'Grayson', 'Nigel', 'Brayden', 'Roderick', 'Tristen', 'Sidney', 'Tomas', 'Bret', 'Clifford', 'Mauricio', 'Antoine', 'Quincy', 'Stuart', 'Irvin', 'Dexter', 'Rogelio', 'Adan', 'Kirk', 'Dorian', 'Kory', 'Ben', 'Gordon', 'Deon', 'Heath', 'Brenton', 'Norman', 'Tyree', 'Courtney', 'Fredrick', 'Jace', 'Jaquan', 'Alvaro', 'Austen', 'Duncan', 'Demarcus', 'Humberto', 'Deangelo', 'Osvaldo', 'Dwight', 'Jarvis', 'Frankie', 'Vicente', 'Markus', 'Reynaldo', 'Uriel', 'Amir', 'Ezekiel', 'Freddy', 'Noe', 'Chaz', 'Deonte', 'Kasey', 'Jamar', 'Leroy', 'Shelby', 'Damion', 'Darien', 'Glen', 'Mohammad', 'Quintin', 'Ahmad', 'Howard', 'Roland', 'Stephon', 'Darrin', 'Cornelius', 'Jaron', 'Coty', 'Everett', 'Milton', 'Neal', 'Triston', 'Shannon', 'Cade', 'Maximilian', 'Antwan', 'Joaquin', 'Aron', 'Carlton', 'Tracy', 'Colten', 'Lonnie', 'Jarod', 'Mike', 'Mitchel', 'Addison', 'Salvatore', 'Jaden', 'Tate', 'Walker', 'Arnold', 'Issac', 'Korey', 'Leonel', 'Solomon', 'Toby', 'Brice', 'Dion', 'Kareem', 'Mohammed', 'Terence', 'Edgardo', 'Dashawn', 'Ezequiel', 'Sawyer', 'Shayne', 'Daryl', 'Don', 'Jan', 'Adolfo', 'Freddie', 'Rigoberto', 'Tre', 'Jovan', 'Vernon', 'Guadalupe', 'Will', 'Dandre', 'Deion', 'Fred', 'Holden', 'Raphael', 'Dillan', 'Herbert', 'Tristin', 'Coleman', 'Cullen', 'Kristofer', 'Marcel', 'Jaylen', 'Clark', 'Clifton', 'Raheem', 'Rick', 'Deven', 'Jamel', 'Jimmie', 'Kent', 'Lamont', 'Sammy', 'Dawson', 'Anton', 'Cortez', 'Darion', 'Ezra', 'German', 'Nathanial', 'Nestor', 'Baby', 'Lloyd', 'Moses', 'Rory', 'Ahmed', 'Guy', 'Malachi', 'Rickey', 'Axel', 'Kerry', 'Loren', 'Agustin', 'Brooks', 'Conrad', 'Cristopher', 'Dana', 'Darrius', 'Infant', 'Jerrod', 'Akeem', 'Bernardo', 'Santos', 'Kai', 'Reece', 'Winston', 'Ignacio', 'Blair', 'Gerard', 'Gunnar', 'Jefferson', 'Juwan', 'Kolby', 'Pierce', 'Wilfredo', 'Darin', 'Elmer', 'Heriberto', 'Dimitri', 'Elvis', 'Houston', 'Jasper', 'Rashawn', 'Colt', 'Donnie', 'Duane', 'Jairo', 'Madison', 'Sage', 'Irving', 'Johnnie', 'Kaden', 'Mohamed', 'Wendell', 'Bradford', 'Jamison', 'Dequan', 'Gene', 'Gonzalo', 'Jameson', 'Reuben', 'Rhett', 'Robin', 'Bennett', 'Josef', 'Davonte', 'Isaias', 'Kade', 'Moshe', 'Camden', 'Davion', 'Jamil', 'Misael', 'Thaddeus', 'Travon', 'Cruz', 'Donavan', 'Hassan', 'Leland', 'Trever', 'Antony', 'Ladarius', 'Nico', 'Paris', 'Gino', 'Leslie', 'Pierre', 'Stewart', 'Zakary', 'Arron', 'Jacques', 'Jaleel', 'Kolton', 'Trace', 'Cyrus', 'Dewayne', 'Jeff', 'Myron', 'Dayton', 'Hakeem', 'Kadeem', 'Lester', 'Rex', 'River', 'Rocky', 'Ulises', 'Bradly', 'Brandyn', 'Erich', 'Jackie', 'Jayden', 'Reese', 'Ryne', 'Tobias', 'Aldo', 'Alton', 'Camron', 'Jamarcus', 'Clyde', 'Keon', 'Nick', 'Rico', 'Zechariah', 'Devonta', 'Estevan', 'Greg', 'Kane', 'Brandan', 'Dylon', 'Aubrey', 'Cecil', 'Dangelo', 'Demarco', 'Dillion', 'Herman', 'Sonny', 'Talon', 'Brennen', 'Donnell', 'Eliezer', 'August', 'Benito', 'Randolph', 'Royce', 'Vance', 'Benny', 'Coby', 'Cordell', 'Kellen', 'Quinten', 'Floyd', 'Javonte', 'Alonso', 'Aric', 'Dan', 'Hugh', 'Ibrahim', 'Silas', 'Anderson', 'Bryon', 'Devyn', 'Jaylon', 'Kieran', 'Remington', 'Tariq', 'Darwin', 'Gunner', 'Jonas', 'Octavio', 'Shea', 'Tory', 'Bronson', 'Caden', 'Codey', 'Hernan', 'Jacoby', 'Layne', 'Marquez', 'Demario', 'Junior', 'Keanu', 'Lionel', 'Austyn', 'Eliseo', 'Grady', 'Jabari', 'Jim', 'Kenton', 'Otis', 'Raymundo', 'Shay', 'Ari', 'Chester', 'Garett', 'Jorden', 'Muhammad', 'Rusty', 'Adrien', 'Alexandre', 'Bo', 'Dominque', 'Elvin', 'Fidel', 'Jerrell', 'Niko', 'Tayler', 'Codie', 'Emmett', 'Isai', 'Jessy', 'Tom', 'Tyron', 'Amos', 'Dakotah', 'Dallin', 'Dario', 'Gregorio', 'Kelsey', 'Keven', 'Khalid', 'Lincoln', 'Montana', 'Andreas', 'Darrian', 'Elisha', 'Garrison', 'Jamaal', 'Justus', 'Mateo', 'Deondre', 'Dontae', 'Edmund', 'Forest', 'Josh', 'Justyn', 'Kobe', 'Lyle', 'Aiden', 'Chadwick', 'Derik', 'Destin', 'Ervin', 'Jerald', 'Schuyler', 'Unknown', 'Adonis', 'Broderick', 'Dusty', 'Isidro', 'Louie', 'Barrett', 'Davin', 'Mikel', 'Spenser', 'Vaughn', 'Antwon', 'Daron', 'Darrion', 'Dejuan', 'Deshaun', 'Fredy', 'Jude', 'Kelby', 'Maximillia', 'Orion', 'Raekwon', 'Robbie', 'Ron', 'Stone', 'Tavon', 'Tyshawn', 'Domenic', 'Eddy', 'Jerod', 'Kelton', 'Ulysses', 'Westley', 'Abdiel', 'Alexandro', 'Ashley', 'Brandt', 'Efren', 'Hudson', 'Jade', 'Kendal', 'Kevon', 'Kirby', 'Mickey', 'Morris', 'Najee', 'Rey', 'Ryder', 'Ted', 'Teddy', 'Armani', 'Brant', 'Jedidiah', 'Jomar', 'Julien', 'Kalvin', 'Marques', 'Reggie', 'Syed', 'Tyquan', 'Valentin', 'Armand', 'Carlo', 'Diamond', 'Ellis', 'Jovanny', 'Justen', 'Kegan', 'Kwame', 'Romeo', 'Asa', 'Bill', 'Darrien', 'Denver', 'Devontae', 'Dionte', 'Galen', 'Hans', 'Jody', 'Kole', 'Lazaro', 'Nicklaus', 'Trae', 'Alden', 'Brayan', 'Claude', 'Cristobal', 'Jaylin', 'Jonatan', 'Kalen', 'Luciano', 'Rasheed', 'Rayshawn', 'Ridge', 'Rudolph', 'Francesco', 'Giancarlo', 'Giovanny', 'Harris', 'Harvey', 'Jess', 'Jovany', 'Koby', 'Nikhil', 'Omari', 'Stetson', 'Storm', 'Tristian', 'Abdullah', 'Asher', 'Braydon', 'Cale', 'Elton', 'Genaro', 'Prince', 'Rohan', 'Samson', 'Sherman', 'Timmy'];
	var female_names = ['Joan', 'Sophia', 'Tracey', 'Emma', 'Olivia', 'Isabella', 'Ava', 'Mia', 'Emily', 'Abigail', 'Madison', 'Elizabeth', 'Charlotte', 'Avery', 'Sofia', 'Chloe', 'Ella', 'Harper', 'Amelia', 'Aubrey', 'Addison', 'Evelyn', 'Natalie', 'Grace', 'Hannah', 'Zoey', 'Victoria', 'Lillian', 'Lily', 'Brooklyn', 'Samantha', 'Layla', 'Zoe', 'Audrey', 'Leah', 'Allison', 'Anna', 'Aaliyah', 'Savannah', 'Gabriella', 'Camila', 'Aria', 'Kaylee', 'Scarlett', 'Hailey', 'Arianna', 'Riley', 'Alexis', 'Nevaeh', 'Sarah', 'Claire', 'Sadie', 'Peyton', 'Aubree', 'Serenity', 'Ariana', 'Genesis', 'Penelope', 'Alyssa', 'Bella', 'Taylor', 'Alexa', 'Kylie', 'Mackenzie', 'Caroline', 'Kennedy', 'Autumn', 'Lucy', 'Ashley', 'Madelyn', 'Violet', 'Stella', 'Brianna', 'Maya', 'Skylar', 'Ellie', 'Julia', 'Sophie', 'Katherine', 'Mila', 'Khloe', 'Paisley', 'Annabelle', 'Alexandra', 'Nora', 'Melanie', 'London', 'Gianna', 'Naomi', 'Eva', 'Faith', 'Madeline', 'Lauren', 'Nicole', 'Ruby', 'Makayla', 'Kayla', 'Lydia', 'Piper', 'Sydney', 'Jocelyn', 'Morgan', 'Kimberly', 'Molly', 'Jasmine', 'Reagan', 'Bailey', 'Eleanor', 'Alice', 'Trinity', 'Rylee', 'Andrea', 'Hadley', 'Maria', 'Brooke', 'Mariah', 'Isabelle', 'Brielle', 'Mya', 'Quinn', 'Vivian', 'Natalia', 'Mary', 'Liliana', 'Payton', 'Lilly', 'Eliana', 'Jade', 'Cora', 'Paige', 'Valentina', 'Kendall', 'Clara', 'Elena', 'Jordyn', 'Kaitlyn', 'Delilah', 'Isabel', 'Destiny', 'Rachel', 'Amy', 'Mckenzie', 'Gabrielle', 'Brooklynn', 'Katelyn', 'Laila', 'Aurora', 'Ariel', 'Angelina', 'Aliyah', 'Juliana', 'Vanessa', 'Adriana', 'Ivy', 'Lyla', 'Sara', 'Willow', 'Reese', 'Hazel', 'Eden', 'Elise', 'Josephine', 'Kinsley', 'Ximena', 'Jessica', 'Londyn', 'Makenzie', 'Gracie', 'Isla', 'Michelle', 'Valerie', 'Kylee', 'Melody', 'Catherine', 'Adalynn', 'Jayla', 'Alexia', 'Valeria', 'Adalyn', 'Rebecca', 'Izabella', 'Alaina', 'Margaret', 'Alana', 'Alivia', 'Kate', 'Luna', 'Norah', 'Kendra', 'Summer', 'Ryleigh', 'Julianna', 'Jennifer', 'Lila', 'Hayden', 'Emery', 'Stephanie', 'Angela', 'Fiona', 'Daisy', 'Presley', 'Eliza', 'Harmony', 'Melissa', 'Giselle', 'Keira', 'Kinley', 'Alayna', 'Alexandria', 'Emilia', 'Marley', 'Arabella', 'Emerson', 'Adelyn', 'Brynn', 'Lola', 'Leila', 'Mckenna', 'Aniyah', 'Athena', 'Genevieve', 'Allie', 'Gabriela', 'Daniela', 'Cecilia', 'Rose', 'Adrianna', 'Callie', 'Jenna', 'Esther', 'Haley', 'Leilani', 'Maggie', 'Adeline', 'Hope', 'Jaylah', 'Amaya', 'Maci', 'Ana', 'Juliet', 'Jacqueline', 'Charlie', 'Lucia', 'Tessa', 'Camille', 'Katie', 'Miranda', 'Lexi', 'Makenna', 'Jada', 'Delaney', 'Cassidy', 'Alina', 'Georgia', 'Iris', 'Ashlyn', 'Kenzie', 'Megan', 'Anastasia', 'Paris', 'Shelby', 'Jordan', 'Danielle', 'Lilliana', 'Sienna', 'Teagan', 'Josie', 'Angel', 'Parker', 'Mikayla', 'Brynlee', 'Diana', 'Chelsea', 'Kathryn', 'Erin', 'Annabella', 'Kaydence', 'Lyric', 'Arya', 'Madeleine', 'Kayleigh', 'Vivienne', 'Sabrina', 'Cali', 'Raelynn', 'Leslie', 'Kyleigh', 'Ayla', 'Nina', 'Amber', 'Daniella', 'Finley', 'Olive', 'Miriam', 'Dakota', 'Elliana', 'Juliette', 'Noelle', 'Alison', 'Amanda', 'Alessandra', 'Evangeline', 'Phoebe', 'Bianca', 'Christina', 'Yaretzi', 'Raegan', 'Kelsey', 'Lilah', 'Fatima', 'Kiara', 'Elaina', 'Cadence', 'Nyla', 'Addyson', 'Giuliana', 'Alondra', 'Gemma', 'Ashlynn', 'Carly', 'Kyla', 'Alicia', 'Adelaide', 'Laura', 'Allyson', 'Charlee', 'Nadia', 'Mallory', 'Heaven', 'Cheyenne', 'Ruth', 'Tatum', 'Lena', 'Ainsley', 'Amiyah', 'Journey', 'Malia', 'Haylee', 'Veronica', 'Eloise', 'Myla', 'Mariana', 'Jillian', 'Joanna', 'Madilyn', 'Baylee', 'Selena', 'Briella', 'Sierra', 'Rosalie', 'Gia', 'Briana', 'Talia', 'Abby', 'Heidi', 'Annie', 'Jane', 'Maddison', 'Kira', 'Carmen', 'Lucille', 'Harley', 'Macy', 'Skyler', 'Kali', 'June', 'Elsie', 'Kamila', 'Adelynn', 'Arielle', 'Kelly', 'Scarlet', 'Rylie', 'Haven', 'Marilyn', 'Aubrie', 'Kamryn', 'Kara', 'Hanna', 'Averie', 'Marissa', 'Jayda', 'Jazmine', 'Camryn', 'Everly', 'Jazmin', 'Lia', 'Karina', 'Maliyah', 'Miley', 'Bethany', 'Mckinley', 'Jayleen', 'Esmeralda', 'Macie', 'Aleah', 'Catalina', 'Nayeli', 'Daphne', 'Janelle', 'Camilla', 'Madelynn', 'Kyra', 'Addisyn', 'Aylin', 'Julie', 'Caitlyn', 'Sloane', 'Gracelyn', 'Elle', 'Helen', 'Michaela', 'Serena', 'Lana', 'Angelica', 'Raelyn', 'Nylah', 'Karen', 'Emely', 'Bristol', 'Sarai', 'Alejandra', 'Brittany', 'Vera', 'April', 'Francesca', 'Logan', 'Rowan', 'Skye', 'Sasha', 'Carolina', 'Kassidy', 'Miracle', 'Ariella', 'Tiffany', 'Itzel', 'Justice', 'Ada', 'Brylee', 'Jazlyn', 'Dahlia', 'Julissa', 'Kaelyn', 'Savanna', 'Kennedi', 'Anya', 'Viviana', 'Cataleya', 'Jayden', 'Sawyer', 'Holly', 'Kaylie', 'Blakely', 'Kailey', 'Jimena', 'Melany', 'Emmalyn', 'Guadalupe', 'Sage', 'Annalise', 'Cassandra', 'Madisyn', 'Anabelle', 'Kaylin', 'Amira', 'Crystal', 'Elisa', 'Caitlin', 'Lacey', 'Rebekah', 'Celeste', 'Danna', 'Marlee', 'Gwendolyn', 'Joselyn', 'Karla', 'Joy', 'Audrina', 'Janiyah', 'Anaya', 'Malaysia', 'Annabel', 'Kadence', 'Zara', 'Imani', 'Maeve', 'Priscilla', 'Phoenix', 'Aspen', 'Katelynn', 'Dylan', 'Eve', 'Jamie', 'Lexie', 'Jaliyah', 'Kailyn', 'Lilian', 'Braelyn', 'Angie', 'Lauryn', 'Cynthia', 'Emersyn', 'Lorelei', 'Monica', 'Alanna', 'Brinley', 'Sylvia', 'Journee', 'Nia', 'Aniya', 'Breanna', 'Fernanda', 'Lillie', 'Amari', 'Charley', 'Lilyana', 'Luciana', 'Raven', 'Kaliyah', 'Emilee', 'Anne', 'Bailee', 'Hallie', 'Zariah', 'Bridget', 'Annika', 'Gloria', 'Zuri', 'Madilynn', 'Elsa', 'Nova', 'Kiley', 'Johanna', 'Liberty', 'Rosemary', 'Aleena', 'Courtney', 'Madalyn', 'Aryanna', 'Tatiana', 'Angelique', 'Harlow', 'Leighton', 'Hayley', 'Skyla', 'Kenley', 'Tiana', 'Dayana', 'Evelynn', 'Selah', 'Helena', 'Blake', 'Virginia', 'Cecelia', 'Nathalie', 'Jaycee', 'Danica', 'Dulce', 'Gracelynn', 'Ember', 'Evie', 'Anika', 'Emilie', 'Erica', 'Tenley', 'Anabella', 'Liana', 'Cameron', 'Braylee', 'Aisha', 'Charleigh', 'Hattie', 'Leia', 'Lindsey', 'Marie', 'Regina', 'Isis', 'Alyson', 'Anahi', 'Elyse', 'Felicity', 'Jaelyn', 'Amara', 'Natasha', 'Samara', 'Lainey', 'Daleyza', 'Miah', 'Melina', 'River', 'Amani', 'Aileen', 'Jessie', 'Whitney', 'Beatrice', 'Caylee', 'Greta', 'Jaelynn', 'Milan', 'Millie', 'Lea', 'Marina', 'Kaylynn', 'Kenya', 'Mariam', 'Amelie', 'Kaia', 'Maleah', 'Ally', 'Colette', 'Elisabeth', 'Dallas', 'Erika', 'Karlee', 'Alayah', 'Alani', 'Farrah', 'Bria', 'Madalynn', 'Mikaela', 'Adelina', 'Amina', 'Cara', 'Jaylynn', 'Leyla', 'Nataly', 'Braelynn', 'Kiera', 'Laylah', 'Paislee', 'Desiree', 'Malaya', 'Azalea', 'Kensley', 'Shiloh', 'Brenda', 'Lylah', 'Addilyn', 'Amiya', 'Amya', 'Maia', 'Irene', 'Ryan', 'Jasmin', 'Linda', 'Adele', 'Matilda', 'Emelia', 'Emmy', 'Juniper', 'Saige', 'Ciara', 'Estrella', 'Jaylee', 'Jemma', 'Meredith', 'Myah', 'Rosa', 'Teresa', 'Yareli', 'Kimber', 'Madyson', 'Claudia', 'Maryam', 'Zoie', 'Kathleen', 'Mira', 'Paityn', 'Isabela', 'Perla', 'Sariah', 'Sherlyn', 'Paola', 'Shayla', 'Winter', 'Mae', 'Simone', 'Laney', 'Pearl', 'Ansley', 'Jazlynn', 'Patricia', 'Aliana', 'Brenna', 'Armani', 'Giana', 'Lindsay', 'Natalee', 'Lailah', 'Siena', 'Nancy', 'Raquel', 'Willa', 'Lilianna', 'Frances', 'Halle', 'Janessa', 'Kynlee', 'Tori', 'Leanna', 'Bryanna', 'Ellen', 'Alma', 'Lizbeth', 'Wendy', 'Chaya', 'Christine', 'Elianna', 'Mabel', 'Clarissa', 'Kassandra', 'Mollie', 'Charli', 'Diamond', 'Kristen', 'Coraline', 'Mckayla', 'Ariah', 'Arely', 'Blair', 'Edith', 'Joslyn', 'Hailee', 'Jaylene', 'Chanel', 'Alia', 'Reyna', 'Casey', 'Clare', 'Dana', 'Alena', 'Averi', 'Alissa', 'Demi', 'Aiyana', 'Leona', 'Kailee', 'Karsyn', 'Kallie', 'Taryn', 'Corinne', 'Rayna', 'Asia', 'Jaylin', 'Noemi', 'Carlee', 'Abbigail', 'Aryana', 'Ayleen', 'Eileen', 'Livia', 'Lillianna', 'Mara', 'Danika', 'Mina', 'Aliya', 'Paloma', 'Aimee', 'Kaya', 'Kora', 'Tabitha', 'Denise', 'Hadassah', 'Kayden', 'Monroe', 'Briley', 'Celia', 'Sandra', 'Elaine', 'Hana', 'Jolie', 'Kristina', 'Myra', 'Milana', 'Lisa', 'Renata', 'Zariyah', 'Adrienne', 'America', 'Emmalee', 'Zaniyah', 'Celine', 'Cherish', 'Jaida', 'Kimora', 'Mariyah', 'Avah', 'Nola', 'Iliana', 'Chana', 'Cindy', 'Janiya', 'Carolyn', 'Marisol', 'Maliah', 'Galilea', 'Kiana', 'Milania', 'Alaya', 'Bryn', 'Emory', 'Lorelai', 'Jocelynn', 'Yamileth', 'Martha', 'Jenny', 'Keyla', 'Alyvia', 'Wren', 'Dorothy', 'Jordynn', 'Amirah', 'Nathaly', 'Taliyah', 'Zaria', 'Deborah', 'Elin', 'Rylan', 'Aubrianna', 'Yasmin', 'Julianne', 'Zion', 'Roselyn', 'Salma', 'Ivanna', 'Joyce', 'Paulina', 'Lilith', 'Saniyah', 'Janae', 'Aubrielle', 'Ayanna', 'Henley', 'Sutton', 'Aurelia', 'Lesly', 'Remi', 'Britney', 'Heather', 'Barbara', 'Bryleigh', 'Emmalynn', 'Kaitlynn', 'Elliot', 'Milena', 'Susan', 'Ariyah', 'Kyndall', 'Paula', 'Thalia', 'Aubri', 'Kaleigh', 'Tegan', 'Yaritza', 'Angeline', 'Mercy', 'Kairi', 'Kourtney', 'Krystal', 'Carla', 'Carter', 'Mercedes', 'Alannah', 'Lina', 'Sonia', 'Kenia', 'Everleigh', 'Ivory', 'Sloan', 'Abril', 'Alisha', 'Katalina', 'Carlie', 'Lara', 'Laurel', 'Scarlette', 'Carley', 'Dixie', 'Miya', 'Micah', 'Regan', 'Samiyah', 'Charlize', 'Sharon', 'Rosie', 'Aviana', 'Aleigha', 'Gwyneth', 'Sky', 'Estella', 'Hadlee', 'Luz', 'Patience', 'Temperance', 'Ingrid', 'Raina', 'Libby', 'Jurnee', 'Zahra', 'Belen', 'Jewel', 'Anabel', 'Marianna', 'Renee', 'Rory', 'Elliott', 'Karlie', 'Saylor', 'Deanna', 'Freya', 'Lilia', 'Marjorie', 'Sidney', 'Tara', 'Azaria', 'Campbell', 'Kai', 'Ann', 'Destinee', 'Ariya', 'Lilyanna', 'Avianna', 'Macey', 'Shannon', 'Lennon', 'Saniya', 'Haleigh', 'Jolene', 'Liv', 'Oakley', 'Esme', 'Hunter', 'Aliza', 'Amalia', 'Annalee', 'Evalyn', 'Giavanna', 'Karis', 'Kaylen', 'Rayne', 'Audriana', 'Emerie', 'Giada', 'Harlee', 'Kori', 'Margot', 'Abrielle', 'Ellison', 'Gwen', 'Moriah', 'Wynter', 'Alisson', 'Belinda', 'Cristina', 'Lillyana', 'Neriah', 'Rihanna', 'Tamia', 'Rivka', 'Annabell', 'Araceli', 'Ayana', 'Emmaline', 'Giovanna', 'Kylah', 'Kailani', 'Karissa', 'Nahla', 'Zainab', 'Devyn', 'Karma', 'Marleigh', 'Meadow', 'India', 'Kaiya', 'Sarahi', 'Audrianna', 'Natalya', 'Bayleigh', 'Estelle', 'Kaidence', 'Kaylyn', 'Magnolia', 'Princess', 'Avalyn', 'Ireland', 'Jayde', 'Roxanne', 'Alaysia', 'Amia', 'Astrid', 'Karly', 'Dalilah', 'Makena', 'Penny', 'Ryann', 'Charity', 'Judith', 'Kenna', 'Tess', 'Tinley', 'Collins'];
	var name_span = male_names.concat(female_names);

	skel.breakpoints({
		wide: '(max-width: 1680px)',
		normal: '(max-width: 1280px)',
		narrow: '(max-width: 1000px)',
		mobile: '(max-width: 736px)'
	});

	find_names = function(){
	    //document.getElementById("nc_form").innerHTML = '';
	    names = []
		//retrieve URL
	    full_story = document.getElementById("story_in").value;
	    for (i = 0; i < name_span.length; i++){
	        var name = name_span[i];
	    	var acceptable_its = [name.concat(' '), name.concat('!'), name.concat('.'), name.concat('?')]
	    	for(j=0; j < acceptable_its.length; j++){
	    		curre_name = acceptable_its[j]
	    		lc_name = curre_name.toLowerCase();
		        if(full_story.includes(name) || full_story.includes(lc_name)){
		            names.push(name);
		            {break;}
		        }
	    	}
	    }
	    //names = filter_names(names);

	    //generate new html code to request input and trigger personalization
	    var name_change_info = '<br> <label> For each name, enter its replacement or leave it blank for no change </label> <br>';
		for (i = 0; i < names.length; i++) { 
			var new_nc_entry = '<label>' + names[i] + ': </label> <input type="text" id="name' + i + '" /> <br>';
		    name_change_info += new_nc_entry;
		}
		name_change_info += '<br><input type="button" class="input_button" value="Personalize Story" onclick="rename_me()" />';

		//update the html document and reset the story
	    document.getElementById("nc_form").innerHTML = name_change_info;
	    document.getElementById("full_story").innerHTML = '';
	}


	filter_names = function(names){
	    f_names = [];
		names.sort((a, b) => a.length - b.length);


	    for (i = 0; i < names.length; i++){
	    	name = names[i]
	    	for (j = i + 1; j < names.length; j++){
	    		test_name = names[j];
	    		console.log(test_name);
	    		if(test_name.includes(name)){console.log(test_name); continue;}
	    		f_names.push(name);
	    	} 
	    }
	    return f_names;
	}

	//called directly from the web-page and substitutes replacements for corresponding names in the full_story string
	rename_me = function(){

		//grab replacement names from inputs
		replacement_names = [];

		for (i = 0; i < names.length; i++){
			rn_name = 'name' + i;
			rn = document.getElementById(rn_name).value;
			if(rn == ''){
				rn = names[i];
			}
			replacement_names.push(rn);
		}


		for (i = 0; i < replacement_names.length; i++){
			pre = names[i];
			post = replacement_names[i];
			var pre_re = new RegExp(pre, "i");
			full_story = full_story.replace(pre, post);
		}

	    document.getElementById("full_story").innerHTML = full_story;
	}

	//modal stuff 

	// Get the modal
	var modal = document.getElementById('myModal');

	// Get the button that opens the modal
	var btn = document.getElementById("myBtn");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks the button, open the modal 
	btn.onclick = function() {
	    modal.style.display = "block";
	}

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	    modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	    }
	}

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// CSS polyfills (IE<9).
			if (skel.vars.IEVersion < 9)
				$(':last-child').addClass('last-child');

		// Scrolly links.
			$('.scrolly').scrolly();

		// Prioritize "important" elements on narrow.
			skel.on('+narrow -narrow', function() {
				$.prioritize(
					'.important\\28 narrow\\29',
					skel.breakpoint('narrow').active
				);
			});

	});

})(jQuery);