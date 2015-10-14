# orm-prototype

**Ruby Installation Instructions**

This is a guide for team members.

First get mpapis public key

```
gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3
```

Install rvm

```
\curl -sSL https://get.rvm.io | bash
```

Install latest version of ruby at this time

```
rvm install 2.2.3
```

Set 2.2.3 as default version of ruby

```
rvm alias create default 2.2.3
```

You can verify that this worked correctly by typing `vrm list`

To set rvm as system ruby, first we need to set the terminal to default to the bash (login) terminal. In the terminal menu, click Edit > Preferences > Title and Command. Then click "Run Command as Login Shell."

Then type
```rvm use 2.2.3```

This should have set the system ruby to use 2.2.3 through rvm
To verify, log out and back in and type  `which ruby` or `ruby --version`


**How To run app**

Ensure needed gems are installed.
Example: `gem install datamapper`

Start up main Sinatra app with
```ruby app.rb```

This should result in something similar to
```
[2015-09-18 22:32:03] INFO  WEBrick 1.3.1
[2015-09-18 22:32:03] INFO  ruby 2.2.3 (2015-08-18) [x86_64-linux]
== Sinatra (v1.4.6) has taken the stage on 8080 for development with backup from WEBrick
[2015-09-18 22:32:03] INFO  WEBrick::HTTPServer#start: pid=44061 port=8080
```

In your browser go to localhost:8080 to see the app running

*To install sqlite*
```sudo apt-get install libgmp3-dev```

Sidenote:
Ensure you have the ruby dev kit installed with `sudo apt-get install ruby-dev`
