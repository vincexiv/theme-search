file_path = 'what.txt'  # Replace 'your_file.txt' with the path to your text file

lines = "[\n    {\n"

with open(file_path, 'r') as file:
    for line in file:
        url, theme = str(line.strip()).split(" ;; ")

        disposable, color_weights = theme.split("#")
        colors, weights = color_weights.split(";")

        colors = colors.replace("colors=", "").split(",")
        weights = weights.replace("weights=", "").split(",")

        lines += "        url: '{url}',\n        colors: {{\n".format(url=url)

        for color, weight in zip(colors, weights):
            lines += "          '#{color}': {weight},\n".format(color=color, weight=weight)

        lines += "        }\n    },\n    {\n"

lines = lines[:-6]

with open("links.txt", 'w') as f:
    f.write(str("{}]".format(lines)))

