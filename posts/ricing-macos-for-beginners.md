---
title: Ricing MacOS (For Beginners)
description: My first attempt at ricing MacOS 
date: March 5, 2024
tags: ['webdev', 'workflow', 'Apple' ]
---

One thing I always felt was lackluster regarding Apple was their lack of customization. Apple has *great* UI principles, though, so at some point, I stopped caring very much. It looks great out-of-the-box, so why bother trying to change it?  

Then I discovered [r/unixporn &nearr;](https://www.reddit.com/r/unixporn/). If you're not familiar, it's a popular subreddit where people can share their &ast;NIX customizations. After looking through the top posts for what felt like *hours*, I decided to make my machine *my* machine.

![screenshot](/blog-images/full.jpeg)

###### A screenshot of how everything looks together with the obligatory neofetch.

## I Have No Idea What I'm Doing
Most of what I accomplished was from compiling various resources from the specs shared on each post and figuring out which ones would work best for me. I knew next to nothing about customizing my experience on MacOS, but I figured I'd give it a go. The things that I chose were chosen specifically because they had extensive documentation and support, and made the process easy. 

Here's what I did. 


## Window Management
I wasn't sure what exactly I was looking for here. I tried [Rectangle &nearr;](https://rectangleapp.com/), which was really solid since it behaved similarly to Windows, but ultimately settled on [yabai &nearr;](https://github.com/koekeishiya/yabai).

There was also a specific widget I wanted to use that required yabai (more about that below). 

Here's my yabai config &mdash;

```txt
#!/usr/bin/env sh

# global settings
yabai -m config mouse_follows_focus          off
yabai -m config focus_follows_mouse          off
yabai -m config window_placement             second_child
yabai -m config window_topmot                off
yabai -m config window_opacity               off
yabai -m config window_opacity_duration      0.16
yabai -m config window_shadow                on
yabai -m config window_border                off
yabai -m config window_border_placement      inset # exterior
yabai -m config window_border_width          5
yabai -m config window_border_radius         3
yabai -m config active_window_border_topmost on
yabai -m config active_window_border_color   0xffF9D48F
yabai -m config normal_window_border_color   0xff1B222D
yabai -m config active_window_opacity        1.0
yabai -m config normal_window_opacity        1.0
yabai -m config split_ratio                  0.50
yabai -m config auto_balance                 off
yabai -m config mouse_modifier               fn
yabai -m config mouse_action1                move
yabai -m config mouse_action2                resize

# general space settings
yabai -m config layout                       bsp
yabai -m config top_padding                  44
yabai -m config bottom_padding               8
yabai -m config left_padding                 8
yabai -m config right_padding                8
yabai -m config window_gap                   8

# no yabai 
yabai -m rule --add label="System Preferences" app="^System Preferences$" manage=off
yabai -m rule --add label="Finder" app="^Finder$" manage=off
yabai -m rule --add label="App Store" app="^App Store$" manage=off
yabai -m rule --add label="Activity Monitor" app="^Activity Monitor$" manage=off
yabai -m rule --add label="Calculator" app="^Calculator$" manage=off
yabai -m rule --add label="Colorpicker" app="^Colorpicker$" manage=off
```

## Hotkey Daemon
Since I use yabai for window management, using [skhd &nearr;](https://github.com/koekeishiya/skhd) feels like a must. 

Here's my skhd config &mdash;

```txt
# ~/.config/skhd/skhdrc

# change window focus within space
alt - j : yabai -m window --focus south
alt - k : yabai -m window --focus north
alt - h : yabai -m window --focus west
alt - l : yabai -m window --focus east

#change focus between external displays (left and right)
alt - s: yabai -m display --focus west
alt - g: yabai -m display --focus east

# rotate layout clockwise
shift + alt - r : yabai -m space --rotate 270

# flip along y-axis
shift + alt - y : yabai -m space --mirror y-axis

# flip along x-axis
shift + alt - x : yabai -m space --mirror x-axis

# toggle window float
shift + alt - t : yabai -m window --toggle float --grid 4:4:1:1:2:2

# maximize a window
shift + alt - m : yabai -m window --toggle zoom-fullscreen

# balance out tree of windows (resize to occupy same area)
shift + alt - e : yabai -m space --balance

# swap windows
shift + alt - j : yabai -m window --swap south
shift + alt - k : yabai -m window --swap north
shift + alt - h : yabai -m window --swap west
shift + alt - l : yabai -m window --swap east

# move window and split
ctrl + alt - j : yabai -m window --warp south
ctrl + alt - k : yabai -m window --warp north
ctrl + alt - h : yabai -m window --warp west
ctrl + alt - l : yabai -m window --warp east

# move window to display left and right
shift + alt - s : yabai -m window --display west; yabai -m display --focus west;
shift + alt - g : yabai -m window --display east; yabai -m display --focus east;

#move window to prev and next space
shift + alt - p : yabai -m window --space prev;
shift + alt - n : yabai -m window --space next;

# move window to space #
shift + alt - 1 : yabai -m window --space 1;
shift + alt - 2 : yabai -m window --space 2;
shift + alt - 3 : yabai -m window --space 3;
shift + alt - 4 : yabai -m window --space 4;
shift + alt - 5 : yabai -m window --space 5;
shift + alt - 6 : yabai -m window --space 6;
shift + alt - 7 : yabai -m window --space 7;

# stop/start/restart yabai
ctrl + alt - q : brew services stop yabai
ctrl + alt - s : brew services start yabai
ctrl + alt - r : brew services restart yabai
```

I didn't really feel like I *needed* to configure yabai + skhd too much, but after getting used to it in my workflow and updating it as needed, I have no idea how I could ever go back to *not* using it.

## Terminal
I use [Warp &nearr;](https://www.warp.dev/) for my terminal. It's fast, and feels more intuitive to me than other terminals. It's also very customizable. There are a lot of solid options for terminals, but it really just comes down to personal preference and what you're actually using it for. I definitely recommend trying a few out, at least. 

Warp comes with some default themes, but I went ahead and made my own. Nothing fancy but I tend to prefer slightly muted colors. 

```yml
# Knlrvr.yaml

accent: "#6a9fb5"
background: "#151515"
details: darker
foreground: "#d0d0d0"
terminal_colors:
bright:
	black: "#505050"
	blue: "#b0b0b0"
	cyan: "#8f5536"
	green: "#202020"
	magenta: "#e0e0e0"
	red: "#d28445"
	white: "#f5f5f5"
	yellow: "#303030"
normal:
	black: "#111111"
	blue: "#6a9fb5"
	cyan: "#75b5aa"
	green: "#90a959"
	magenta: "#aa759f"
	red: "#ac4142"
	white: "#d0d0d0"
	yellow: "#f4bf75"
```

There's a few different customization options for Warp that you can read about [here &nearr;](https://docs.warp.dev/appearance/custom-themes). 

## Übersicht
[Übersicht &nearr;](https://tracesof.net/uebersicht/) provides widgets for your desktop. The only widget that I have configured, however, is simple-bar. 

[simple-bar &nearr;](https://www.jeantinland.com/toolbox/simple-bar/) is the tool I wanted that required the installation of yabai. It's a great little cosmetic addition and gives me a good idea of the happenings of my machine. It's also highly customizable, so you can really make it work for you. 

Here's what it looks like - 

![simple-bar](/blog-images/simple-bar.png)

###### A screenshot of just the simple-bar. If you're on mobile, I'm so sorry.

## IDE
I use VSCode for my IDE. I've tinkered with [Neovim &nearr;](https://neovim.io/), and [Zed &nearr;](https://zed.dev/) and I think either one would be a solid replacement for VSCode. Personally, I'm leaning more towards Neovim lately just because I *really* like the idea of not using a mouse, especially after getting accustomed to skhd. 

I don't have Neovim on this machine (yet), but here's Zed & VSCode side by side &mdash; 

![zed vs vsc](/blog-images/zed-vs-vsc.png)

###### Light - Zed, Dark - VSCode.

As you can see, Zed is familiar. I like what Zed promises, so I definitely plan to use it here and there and continue to learn about it (& Neovim), but VSCode is my go-to for the foreseeable future. 

## Conclusion
I don't think I did as much as I could have, but I really enjoy my experience on my Macbook now. It feels more like I'm using something that belongs to me rather than something that Apple has provided. I don't know that there's much else I would do, but if I find anything, I'll be sure to add updates to this post. 

Let me know what you think! & **happy coding**!